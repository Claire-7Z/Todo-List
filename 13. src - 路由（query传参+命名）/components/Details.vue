<template>
    <ul>
        <li>
            <a href="/message1">{{$route.query.id}}-{{$route.query.name}}</a>
        </li>
        <li>
            <a href="/message2">{{$route.query.id}}-{{$route.query.name}}</a>
        </li>
        <li>
            <a href="/message3">{{$route.query.id}}-{{$route.query.name}}</a>
        </li>
    </ul>
</template>

<script>
export default {
    name: "Details"
}
</script>

<style>

</style>