import React, { useEffect, useState } from 'react'
import logo from "../images/pokemon.png"
import Card from './Card'
import PokemonInfo from './PokemonInfo'
import axios from 'axios'

const Main = () => {

    const [pokeData, setPokeData] = useState([])
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [loading, setLoading] = useState(true)
    const [previousData, setPreviousData] = useState()
    const [nextData, setNextData] = useState()
    const [pokeDex, setPokeDex] = useState()
    const [openModal, setOpenModal] = useState(false)


    const pokeFun = async () => {
        setLoading(true)
        const res = await axios.get(url);
        // console.log(res.data.results);
        // console.log(res.data.next);
        setNextData(res.data.next)
        // console.log(res.data.previous);
        setPreviousData(res.data.previous)
        getPokemon(res.data.results)
        setLoading(false)
        // console.log(pokeData);

    }

    const getPokemon = async (res) => {
        res.forEach(async (item) => {
            // console.log(item.url);
            const result = await axios.get(item.url)
            // console.log(result);
            // console.log(result.data);
            setPokeData(prevData => [...prevData, result.data]
                //for id sorting
                // state.sort((a, b) => a.id > b.id ? 1 : -1)
            )
        })
    }

    useEffect(() => {
        console.log('-------------------------------- inside use effect--------------------------------')
        // eslint-disable-next-line
        pokeFun()
        // eslint-disable-next-line
    }, [url])

    return (
        <div className='container'>
            <div className='logo'>
                <img src={logo} alt='' />
            </div>

            <div className="btn-group">
                {previousData && <button onClick={() => {
                    setPokeData([])
                    setUrl(previousData)
                }}>Previous</button>}

                {nextData && <button onClick={() => {
                    setPokeData([])
                    setUrl(nextData)
                }}>Next</button>}
            </div>

            <div className="pokemon-container">

                <Card pokeData={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)} setOpenModal={setOpenModal} />

                <div className="modalBackground">
                    {openModal && <PokemonInfo pokeDex={pokeDex} setOpenModal={setOpenModal} />}
                </div>

            </div>
        </div>
    )
}

export default Main