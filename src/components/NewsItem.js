import React from 'react'

 function NewsItem(props){
        let { title, description, imageUrl, newsUrl, date, author, source } = props;
        return (
            <div>
                <div className="card m-4"  >
                    <img src={imageUrl ? imageUrl : "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61BvqjVroeL._AC_UF894,1000_QL80_.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            position: 'absolute',
                            top:'0',
                            right: '0'
                        }}>
                            <span className=" badge rounded-pill bg-danger">
                                {source}
                            </span>
                        </div>

                        <p className="card-text">{description}</p>
                        <p className="card-text"><small style={{ color: 'red' }}>By {!author ? "Unknown" : author} on {date}</small></p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>

                    </div>
                </div>
            </div>
        )
}

export default NewsItem