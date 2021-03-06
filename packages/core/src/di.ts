/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @module
 * @description
 * The `di` module provides dependency injection container services.
 */

export * from './di/metadata';
export * from './di/defs';
export {forwardRef, resolveForwardRef, ForwardRefFn} from './di/forward_ref';
export {Injectable, InjectableDecorator, InjectableProvider} from './di/injectable';
export {inject, InjectFlags, INJECTOR, Injector} from './di/injector';
export {ReflectiveInjector} from './di/reflective_injector';
export {StaticProvider, ValueProvider, ExistingProvider, FactoryProvider, Provider, TypeProvider, ClassProvider} from './di/provider';
export {createInjector} from './di/r3_injector';
export {ResolvedReflectiveFactory, ResolvedReflectiveProvider} from './di/reflective_provider';
export {ReflectiveKey} from './di/reflective_key';
export {InjectionToken} from './di/injection_token';
