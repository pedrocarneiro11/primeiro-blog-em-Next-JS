import axios from 'axios';

export const api = axios.create ({
    baseURL: 'https://iftsaiuviljmsbsbfypn.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmdHNhaXV2aWxqbXNic2JmeXBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM0MTg2MzQsImV4cCI6MTk3ODk5NDYzNH0.WDH6IA_X99lT9PGPi7yhwS35V4LwOR8FkVZh7bhOqJI",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmdHNhaXV2aWxqbXNic2JmeXBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM0MTg2MzQsImV4cCI6MTk3ODk5NDYzNH0.WDH6IA_X99lT9PGPi7yhwS35V4LwOR8FkVZh7bhOqJI"
    }
})