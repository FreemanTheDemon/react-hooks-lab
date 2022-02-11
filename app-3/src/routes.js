import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Pokemon from './Pokemon';
import PokemonList from './PokemonList';

export default (
    <div>
        <Routes>
            <Route path="/" element={<PokemonList />}/>
            <Route path="/pokemon/:name" element={<Pokemon />}/>
        </Routes>
    </div>
  );