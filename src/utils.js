exports.assert = ( condition, msg ) => {
  if( !condition ) {
    throw new Error( msg + '' )
  }
}