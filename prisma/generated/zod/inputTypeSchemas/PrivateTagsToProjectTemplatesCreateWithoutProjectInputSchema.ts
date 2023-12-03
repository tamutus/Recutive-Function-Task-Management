import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateNestedOneWithoutProjectTemplatesInputSchema } from './PrivateTagCreateNestedOneWithoutProjectTemplatesInputSchema';

export const PrivateTagsToProjectTemplatesCreateWithoutProjectInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesCreateWithoutProjectInput> = z.object({
  privateTag: z.lazy(() => PrivateTagCreateNestedOneWithoutProjectTemplatesInputSchema)
}).strict();

export default PrivateTagsToProjectTemplatesCreateWithoutProjectInputSchema;
