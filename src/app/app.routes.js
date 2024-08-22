import { Component } from '@angular/core';
import{ Routes } from '@angular/router'
import path from 'path';

export const routes = [
    {path:"", redirectTo:"/", pathMatch:"full"},
    {path:"", Component:HomeC}
];
