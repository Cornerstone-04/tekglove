import { products } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export function ProductShowcase() {
  return (
    <section className="py-32 border-b border-border">
      <div className="px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="font-mono text-xxs tracking-[0.3em] uppercase text-orange mb-4">
              The Collection
            </p>
            <h2 className="font-heading font-black text-[clamp(2.5rem,6vw,5rem)] text-white">
              Our Products
            </h2>
          </div>
          <Link
            href="/product"
            className="font-mono text-xxs tracking-[0.15em] uppercase text-white/40 border-b border-white/20 pb-0.5 hover:text-white hover:border-white/50 transition-all duration-200"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {products.slice(0, 3).map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-surface overflow-hidden"
            >
              <div className="relative aspect-square bg-[#0a0a0a] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover brightness-90 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 font-mono text-xxs tracking-[0.15em] uppercase text-black bg-orange px-2.5 py-1 transition-all duration-300 group-hover:bg-white">
                  {p.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-[1.4rem] text-white mb-2">
                  {p.name}
                </h3>
                <p className="font-sans text-[0.78rem] text-white/45 leading-[1.7] mb-4">
                  {p.desc}
                </p>
                <span className="font-mono text-[0.65rem] tracking-widest text-orange">
                  {p.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
