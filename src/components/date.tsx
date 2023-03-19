import { parseISO, format } from "date-fns";
import { ja } from "date-fns/locale";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "yyyy-MM-dd HH:mm", { locale: ja })}
    </time>
  );
}
