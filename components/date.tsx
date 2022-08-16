import { parseISO, format } from 'date-fns';
// var parseISO  = require('date-fns');
// var  format = require('date-fns');
import { ja } from 'date-fns/locale';
// var ja = require('date-fns/locale');

export default function Date({ dateString }:{dateString: any}) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, 'PPP (eee)', { locale: ja })}
    </time>
  );
}

// import { parseISO, format } from 'date-fns'

// export default function Date({ dateString }: { dateString: string }) {
//   const date = parseISO(dateString)
//   return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
// }
