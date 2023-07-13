import React from 'react'

const Card = ({ pokeData, loading, infoPokemon, setOpenModal }) => {
    // console.log(pokeData);
    return (
        <>
            {
                loading ? <h1 className='loading'>Loading...</h1> :
                    pokeData.map((item) => {
                        return (
                            <div className='card' key={item.id}
                                onMouseEnter={() => {
                                    infoPokemon(item);
                                    setOpenModal(true)
                                }}
                                onMouseLeave={() => setOpenModal(false)}>
                                <>
                                    <img src={item.sprites.front_default} alt="" />
                                    <h2>{item.name}</h2>
                                </>
                            </div>
                        )
                    })
            }
        </>
    )
}

export default Card