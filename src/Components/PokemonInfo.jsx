import React from 'react'

const PokemonInfo = ({ pokeDex, setOpenModal }) => {
    // console.log(pokeDex);
    return (
        <div
            className='modal-container'
            onMouseEnter={() => {
                setOpenModal(true)
            }}
            onMouseLeave={() => setOpenModal(false)}
        >

            {
                (!pokeDex) ? "" : (
                    <>
                        <div>
                            <h1>{pokeDex.name}</h1>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeDex.id}.svg`} alt='charmendar' />

                            <div className='ability'>
                                {
                                    pokeDex.abilities.map((poke, idx) => {
                                        if (idx >= 2) {
                                            return null
                                        }
                                        return (
                                            <>
                                                <div className="group">
                                                    <h2>{poke.ability.name}</h2>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>

                            <div className="states">
                                {
                                    pokeDex.stats.map((poke) => {
                                        return (
                                            <>
                                                <h3><p>{poke.stat.name}</p>:  {poke.base_stat}</h3>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default PokemonInfo