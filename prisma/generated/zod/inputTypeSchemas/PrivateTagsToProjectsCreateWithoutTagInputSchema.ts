import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateNestedOneWithoutPrivateTagsInputSchema } from './ProjectCreateNestedOneWithoutPrivateTagsInputSchema';

export const PrivateTagsToProjectsCreateWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsCreateWithoutTagInput> = z.object({
  project: z.lazy(() => ProjectCreateNestedOneWithoutPrivateTagsInputSchema)
}).strict();

export default PrivateTagsToProjectsCreateWithoutTagInputSchema;
