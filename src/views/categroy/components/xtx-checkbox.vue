<template>
  <div
    class="xtx-checkbox"
    @click="changeChecked()"
  >
    <i
      v-if="modelValue"
      class="iconfont icon-checked"
    ></i>
    <i
      v-else
      class="iconfont icon-unchecked"
    ></i>
    <span v-if="$slots.default">
      <slot />
    </span>
  </div>
</template>
<script>
export default {
  name: 'XtxCheckbox',
  props: { modelValue: { type: Boolean } },
  setup (props, { emit }) {
    const changeChecked = () => {
      emit('update:modelValue', !props.modelValue)
    }
    return { changeChecked }
  }
}
</script>
<style scoped lang="less">
.xtx-checkbox {
  display: inline-block;
  margin-right: 2px;
  .icon-checked {
    color: @xtxColor;
    ~ span {
      color: @xtxColor;
    }
  }
  i {
    position: relative;
    top: 1px;
  }
  span {
    margin-left: 2px;
  }
}
</style>
