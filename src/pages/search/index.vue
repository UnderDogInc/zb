<template>
  <SearchWrapper>
    <template #sidebar>
      <SearchSideBar>
        <template #title>Поиск сотрудников</template>
        <template #action>
          <SimpleInput v-model.trim="searchValue"/>

        </template>
        <template #subtitle>
          Результаты
          <SimpleButton v-if="searchValue !== ''" type="secondary" small @click="clearSearch">
            Очистить
          </SimpleButton>
        </template>
        <template #list>
          <li class="loading" v-if="loading">
            <SimpleSpinner/>
          </li>
          <li @click="selectUser(user)" v-for="user in displayedUsers" :key="user.id">
            <SearchCard v-if="!loading" :active="user.id === activeUser?.id" :user-data="user"/>
          </li>
          <li v-if="userList.length > displayedCount">
            <SimpleButton @click="loadMore">
              Еще
            </SimpleButton>
          </li>
        </template>
      </SearchSideBar>
    </template>
    <template #content>
      <SearchInfo v-if="activeUser">
        <template #name>
          {{activeUser?.name}}
        </template>
        <template #about>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </template>
        <template #photo>
          <img class="image" src="../../app/images/placeholder.svg" alt="">
        </template>
        <template #email>
          {{activeUser?.email}}
        </template>
        <template #phone>
          {{activeUser?.phone}}
        </template>
      </SearchInfo>
      <EmptyInfo v-else>
        <template #content>
          Выберите сотрудника, чтобы посмотреть его профиль
        </template>
      </EmptyInfo>
    </template>
  </SearchWrapper>
</template>

<script setup>
import SearchWrapper from "./ui/SearchWrapper.vue";
import SearchSideBar from "./ui/SearchSideBar.vue";
import { SimpleInput } from "~/shared/ui/SimpleInput";
import SearchCard from "~/pages/search/ui/SearchCard.vue";
import SearchInfo from "~/pages/search/ui/SearchInfo.vue";
import EmptyInfo from "~/pages/search/ui/EmptyInfo.vue";
import {SimpleButton} from "~/shared/ui/SimpleButton";
import {useStateSearch} from "./model/useStateSearch.js"
import {SimpleSpinner} from "~/shared/ui/SimpleSpinner";
const {
  searchValue,
  loading,
  selectUser,
  displayedUsers,
  activeUser,
  userList,
  displayedCount,
  loadMore,
  clearSearch
} = useStateSearch()
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
}
.loading {
  text-align: center;
}
</style>
