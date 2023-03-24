import { CategoriesHeader } from '@/components/categories-header'

export default function Home() {
  return (
    <>
      <CategoriesHeader />
      <div className="container p-4 md:p-0 mt-8">
        <section className="bg-red-400 rounded-lg h-80 w-full"></section>
        <section className="bg-red-400 rounded-lg h-80 w-full"></section>
        <section className="bg-red-400 rounded-lg h-80 w-full"></section>
        <section className="bg-red-400 rounded-lg h-80 w-full"></section>
        <section className="bg-red-400 rounded-lg h-80 w-full"></section>
        <section className="bg-red-400 rounded-lg h-80 w-full"></section>
        <section className="bg-red-400 rounded-lg h-80 w-full"></section>
      </div>
    </>
  )
}
