import { QuoteSectionProps } from "@/core/common/common.interface";

export default function QuoteSection({ quote, author }: QuoteSectionProps) {
	return (
		<section className="w-full h-auto md:h-[420px] flex items-center justify-center px-6 py-16 md:py-0 bg-gray-100 dark:bg-neutral-900">
			<div className="max-w-3xl text-center">
				<blockquote className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white italic leading-relaxed">
					“{quote}”
				</blockquote>
				<p className="mt-6 text-lg font-medium text-gray-600 dark:text-gray-400">
					— {author}
				</p>
			</div>
		</section>
	);
}
