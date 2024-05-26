// /Users/ratpartyserver/git/infinite-zimmah/src/components/HtmlDisplay.js

export default function HtmlDisplay({ html, css }) {
  return (
    <div className="border border-gray-300 rounded p-4 mt-4 overflow-auto">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: html }} className="overflow-auto" />
    </div>
  );
}