import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateNestedOneWithoutPrivateTagsInputSchema } from './ProjectTemplateCreateNestedOneWithoutPrivateTagsInputSchema';
import { PrivateTagCreateNestedOneWithoutProjectTemplatesInputSchema } from './PrivateTagCreateNestedOneWithoutProjectTemplatesInputSchema';

export const PrivateTagsToProjectTemplatesCreateInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesCreateInput> = z.object({
  project: z.lazy(() => ProjectTemplateCreateNestedOneWithoutPrivateTagsInputSchema),
  privateTag: z.lazy(() => PrivateTagCreateNestedOneWithoutProjectTemplatesInputSchema)
}).strict();

export default PrivateTagsToProjectTemplatesCreateInputSchema;
