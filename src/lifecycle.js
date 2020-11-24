// 通用的生命周期事件，任何事件都具有。
// onBeforeTransition
// onLeaveState
// onTransition
// onEnterState
// onAfterTransition

// 争对具体的某个变化或者状态
// onBefore<Transition>
// onLeave<STATE>
// onEnter<STATE>
// onAfter<Transition>

// 一次完整的转换的生命周期过程
// 1. onBeforeTransition
// 2. onBefore<Transition>
// 3. onLeaveState
// 4. onLeave<STATE>
// 5. onTransition
// 6. onEnter<STATE>
// 7. onEnterState
// 8. onAfter<Transition>
// 9. onAfterTransition

// 转换只能够在以下阶段能够被取消
// 1. onBeforeTransition
// 2. onBefore<Transition>
// 3. onLeaveState
// 4. onLeave<STATE>
// 5. onTransition

// 异步转换


export default {
  onBeforeTransition() {

  },
  onLeaveState() {

  },
  onTransition() {

  },
  onEnterState() {

  },
  onAfterTransition() {

  },
  onEnterSolid() {
    // 异步
    return new Promise(function (resolve) {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }
}
