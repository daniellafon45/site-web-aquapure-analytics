import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useState } from "react";
import { BlogContent } from "@/components/blog/blog-content";
import { RichTextEditor } from "@/components/blog/rich-text-editor";
import { SiteFooter } from "@/components/site/footer";
import { useBlogPosts } from "@/hooks/use-blog-posts";
import { addCategory, getAllCategories } from "@/lib/blog/categories";
import { contentToPlainText } from "@/lib/blog/content";
import { addCustomPost, deleteCustomPost, estimateReadMinutes, slugify } from "@/lib/blog/store";

export const Route = createFileRoute("/adminblog")({
  head: () => ({
    meta: [{ title: "Administration blogue, AquaPure" }],
  }),
  component: AdminBlogPage,
});

function AdminBlogPage() {
  const { posts, refresh } = useBlogPosts();
  const customPosts = posts.filter((p) => p.id.startsWith("custom-"));

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [editorKey, setEditorKey] = useState(0);
  const [categories, setCategories] = useState(() => getAllCategories());
  const [category, setCategory] = useState(() => getAllCategories()[0] ?? "Opérations");
  const [newCategory, setNewCategory] = useState("");
  const [categoryMessage, setCategoryMessage] = useState("");
  const [author, setAuthor] = useState("Équipe AquaPure");
  const [publishedAt, setPublishedAt] = useState(() => new Date().toISOString().slice(0, 10));
  const [coverImage, setCoverImage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const refreshCategories = () => {
    const all = getAllCategories();
    setCategories(all);
    if (!all.includes(category) && all[0]) {
      setCategory(all[0]);
    }
  };

  const handleCoverFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Veuillez sélectionner un fichier image.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setError("L'image ne doit pas dépasser 2 Mo.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setCoverImage(reader.result as string);
      setError("");
    };
    reader.readAsDataURL(file);
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!slug || slug === slugify(title)) {
      setSlug(slugify(value));
    }
  };

  const handleAddCategory = () => {
    setCategoryMessage("");
    try {
      const created = addCategory(newCategory);
      setNewCategory("");
      refreshCategories();
      setCategory(created);
      setCategoryMessage(`Catégorie « ${created} » ajoutée.`);
    } catch (err) {
      setCategoryMessage(err instanceof Error ? err.message : "Erreur.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!coverImage.trim()) {
      setError("Ajoutez une image d'en-tête (fichier ou URL).");
      return;
    }
    if (!contentToPlainText(content)) {
      setError("Le contenu de l'article est requis.");
      return;
    }

    try {
      const post = addCustomPost({
        title,
        slug: slug || slugify(title),
        excerpt,
        content,
        coverImage,
        category,
        author,
        publishedAt,
      });
      setSuccess(`Article « ${post.title} » publié avec succès.`);
      setTitle("");
      setSlug("");
      setExcerpt("");
      setContent("");
      setCoverImage("");
      setEditorKey((k) => k + 1);
      refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur lors de la publication.");
    }
  };

  const handleDelete = (id: string) => {
    if (!confirm("Supprimer cet article ?")) return;
    deleteCustomPost(id);
    refresh();
  };

  return (
    <main className="bg-background min-h-screen">
      <header className="border-b border-border/60 bg-card">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-navy">Administration du blogue</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Rédigez avec titres, citations, images et gérez vos catégories.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/blogue"
              className="rounded-md border border-input px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
            >
              Voir le blogue
            </Link>
            <Link to="/" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Accueil
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-10 grid lg:grid-cols-2 gap-8 lg:gap-10">
        <section>
          <h2 className="text-lg font-bold text-navy mb-4">Nouvel article</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Titre *</label>
              <input
                required
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="mt-1.5 w-full h-11 rounded-xl border border-input bg-background px-3 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Slug (URL)</label>
              <input
                value={slug}
                onChange={(e) => setSlug(slugify(e.target.value))}
                placeholder="mon-article"
                className="mt-1.5 w-full h-11 rounded-xl border border-input bg-background px-3 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring font-mono"
              />
              <p className="mt-1 text-xs text-muted-foreground">/blogue/{slug || "..."}</p>
            </div>
            <div>
              <label className="text-sm font-medium">Image d&apos;en-tête *</label>
              <div className="mt-1.5 space-y-3">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCoverFile}
                  className="block w-full text-sm text-muted-foreground file:mr-3 file:rounded-md file:border-0 file:bg-primary file:px-3 file:py-2 file:text-sm file:font-medium file:text-primary-foreground hover:file:bg-primary/90"
                />
                <input
                  type="url"
                  value={coverImage.startsWith("data:") ? "" : coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                  placeholder="Ou collez une URL d'image (https://...)"
                  className="w-full h-11 rounded-xl border border-input bg-background px-3 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
                {coverImage && (
                  <div className="overflow-hidden rounded-xl border border-border/60 aspect-[16/10] max-w-sm">
                    <img src={coverImage} alt="Aperçu" className="h-full w-full object-cover" />
                  </div>
                )}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Résumé *</label>
              <textarea
                required
                rows={3}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none resize-y focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
            <div>
              <div className="flex items-center justify-between gap-3">
                <label className="text-sm font-medium">Contenu *</label>
                <button
                  type="button"
                  onClick={() => setShowPreview((v) => !v)}
                  className="text-xs font-medium text-primary hover:underline"
                >
                  {showPreview ? "Éditer" : "Aperçu"}
                </button>
              </div>
              <div className="mt-1.5">
                {showPreview ? (
                  <div className="rounded-xl border border-input bg-card p-4 min-h-[280px]">
                    {contentToPlainText(content) ? (
                      <BlogContent content={content} className="!mt-0" />
                    ) : (
                      <p className="text-sm text-muted-foreground">Rien à prévisualiser pour l&apos;instant.</p>
                    )}
                  </div>
                ) : (
                  <RichTextEditor
                    key={editorKey}
                    value={content}
                    onChange={setContent}
                    placeholder="Titres, paragraphes, listes, citations, images…"
                  />
                )}
              </div>
              {contentToPlainText(content) && (
                <p className="mt-1 text-xs text-muted-foreground">
                  ~{estimateReadMinutes(content)} min de lecture
                </p>
              )}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Catégorie</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1.5 w-full h-11 rounded-xl border border-input bg-background px-3 text-sm outline-none"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Date de publication</label>
                <input
                  type="date"
                  required
                  value={publishedAt}
                  onChange={(e) => setPublishedAt(e.target.value)}
                  className="mt-1.5 w-full h-11 rounded-xl border border-input bg-background px-3 text-sm outline-none"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Nouvelle catégorie</label>
              <div className="mt-1.5 flex gap-2">
                <input
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Ex. Innovation, R&D…"
                  className="flex-1 h-11 rounded-xl border border-input bg-background px-3 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddCategory();
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={handleAddCategory}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-input bg-background px-4 text-sm font-medium hover:bg-accent transition-colors shrink-0"
                >
                  <Plus className="size-4" />
                  Ajouter
                </button>
              </div>
              {categoryMessage && (
                <p className="mt-1.5 text-xs text-muted-foreground">{categoryMessage}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium">Auteur</label>
              <input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="mt-1.5 w-full h-11 rounded-xl border border-input bg-background px-3 text-sm outline-none"
              />
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}
            {success && <p className="text-sm text-emerald-600">{success}</p>}

            <button
              type="submit"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Publier l&apos;article
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-4">
            Articles ajoutés ({customPosts.length})
          </h2>
          {customPosts.length === 0 ? (
            <p className="text-sm text-muted-foreground rounded-xl border border-dashed border-border p-6">
              Aucun article personnalisé. Les 2 articles de départ sont intégrés au code source.
            </p>
          ) : (
            <ul className="space-y-3">
              {customPosts.map((post) => (
                <li
                  key={post.id}
                  className="rounded-xl border border-border/60 bg-card overflow-hidden flex gap-0"
                >
                  {post.coverImage && (
                    <div className="w-24 shrink-0 bg-muted">
                      <img src={post.coverImage} alt="" className="h-full w-full object-cover min-h-[5rem]" />
                    </div>
                  )}
                  <div className="p-4 flex flex-1 items-start justify-between gap-4 min-w-0">
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground">{post.category}</div>
                      <div className="font-semibold text-sm text-navy truncate">{post.title}</div>
                      <Link
                        to="/blogue/$slug"
                        params={{ slug: post.slug }}
                        className="text-xs text-primary hover:underline"
                      >
                        /blogue/{post.slug}
                      </Link>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDelete(post.id)}
                      className="shrink-0 text-xs text-destructive hover:underline"
                    >
                      Supprimer
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 rounded-xl bg-soft border border-border/60 p-5 text-sm text-muted-foreground leading-relaxed">
            <strong className="text-navy">Note :</strong> les articles et catégories ajoutés ici sont
            enregistrés dans le localStorage de ce navigateur. Pour une gestion en production,
            connectez une base de données (ex. Supabase).
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
