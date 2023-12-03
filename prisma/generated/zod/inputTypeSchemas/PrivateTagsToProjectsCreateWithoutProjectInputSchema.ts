import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateNestedOneWithoutProjectsInputSchema } from './PrivateTagCreateNestedOneWithoutProjectsInputSchema';

export const PrivateTagsToProjectsCreateWithoutProjectInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsCreateWithoutProjectInput> = z.object({
  tag: z.lazy(() => PrivateTagCreateNestedOneWithoutProjectsInputSchema)
}).strict();

export default PrivateTagsToProjectsCreateWithoutProjectInputSchema;
