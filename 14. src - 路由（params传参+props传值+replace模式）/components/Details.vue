<template>
    <ul>
        <li>
            <a href="/message1">{{$route.params.id}}-{{$route.params.name}}</a>
        </li>
        <li>
            <a href="/message2">{{$route.params.id}}-{{$route.params.name}}</a>
        </li>
        <li>
            <a href="/message3">{{$route.params.id}}-{{$route.params.name}}</a>
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