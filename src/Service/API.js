//@@@DOCS
//@@Collecting news/data from different sources.
import Sources from "./Sources"
const API = (config) => {
  let collections = Sources.filter((o,i)=>{
    return o.type === config.type
  })
  return collections[0]
}
export default API
