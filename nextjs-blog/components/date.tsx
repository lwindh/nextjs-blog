import { parseISO, format } from 'date-fns'

interface DateProps {
  /** 时间 */
  dateString: string
}

const DateLayout: React.FC<DateProps> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{dateString && format(date, 'yyyy-LL-dd')}</time>
}

export default DateLayout
