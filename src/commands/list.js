// @flow
import * as options from '../utils/options';
import { PError } from '../utils/errors';

export type ListOptions = {};

export function toListOptions(
  args: options.Args,
  flags: options.Flags
): ListOptions {
  return {};
}

export async function list(opts: ListOptions) {
  throw new PError('Unimplemented command "list"');
}
