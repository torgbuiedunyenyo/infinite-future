export default function HtmlDisplay({ html, css }) {
  return (
    <div className="border border-gray-300 rounded p-4 mt-4">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: html }} className="overflow-x-auto" />
    </div>
  );
}