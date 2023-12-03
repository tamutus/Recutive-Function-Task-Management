import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateNestedOneWithoutPrivateTagsInputSchema } from './ProjectTemplateCreateNestedOneWithoutPrivateTagsInputSchema';

export const PrivateTagsToProjectTemplatesCreateWithoutPrivateTagInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesCreateWithoutPrivateTagInput> = z.object({
  project: z.lazy(() => ProjectTemplateCreateNestedOneWithoutPrivateTagsInputSchema)
}).strict();

export default PrivateTagsToProjectTemplatesCreateWithoutPrivateTagInputSchema;
