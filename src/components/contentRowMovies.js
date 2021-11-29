import propTypes from "prop-types"

function Movies(props){
    return (
        <div>
                <div key={props.key}>
                <div className="col-md-4 mb-4">
                    <div className= {props.item.color}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.item.titulo}</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{props.item.cifra}</div>
                                </div>
                                <div className="col-auto">
                                    <i className={props.item.icono}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
Movies.defaultProps = {}
Movies.propTypes ={titulo:propTypes.string.isRequired,
                   color:propTypes.string.isRequired,
                   cifra:propTypes.oneOfType([
                            propTypes.string.isRequired,
                            propTypes.number.isRequired]),
                   icono:propTypes.string.isRequired}



export default Movies

