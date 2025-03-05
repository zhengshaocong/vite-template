
<template>
    <p>你好小葱</p>
</template>


<script setup lang="ts">
import { ref, reactive, defineProps,withDefaults, defineExpose,useSlots,useAttrs,computed ,watch} from 'vue';

const prop = withDefaults(defineProps<{ abc: string,efg:number }>(),{
    abc: '小葱',
    efg:123,
});

//暴露参数
defineExpose({
    click (){

    },
});

const slots = useSlots();//获取插槽

const attr = useAttrs();//获取属性

const aaa = ref(0);

const bbb = reactive({aaa:111});

const ccc = computed(() => {
    return aaa.value + bbb.aaa;
});

watch(() => aaa.value,(newVal,oldVal) => {
    console.log(newVal,oldVal);
});
console.log(slots,attr,ccc.value,prop.abc,prop.efg);
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
