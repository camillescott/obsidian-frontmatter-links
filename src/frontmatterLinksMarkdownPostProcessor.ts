import { MarkdownPostProcessor, MarkdownPostProcessorContext } from 'obsidian';
import { isUri } from "valid-url";

const frontmatterLinksMarkdownPostProcessor: MarkdownPostProcessor = (el: HTMLElement, ctx: MarkdownPostProcessorContext): Promise<any> | void => {
    el.querySelectorAll('.frontmatter-section-data-item').forEach(item => {
        item.childNodes.forEach(childNode => {
            if (childNode instanceof Text) {
                const href = childNode.textContent as string;

                if (isUri(href)) {
                    const a = document.createElement('a') as HTMLAnchorElement;
                    a.href = href;
                    a.text = href;
                    childNode.replaceWith(a);
                }
            }
        });
    });
};

export default frontmatterLinksMarkdownPostProcessor;
