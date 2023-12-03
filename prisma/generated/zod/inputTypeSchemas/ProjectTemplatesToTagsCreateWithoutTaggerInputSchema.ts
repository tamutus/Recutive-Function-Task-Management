import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateNestedOneWithoutTagsInputSchema } from './ProjectTemplateCreateNestedOneWithoutTagsInputSchema';
import { TagCreateNestedOneWithoutProjectTemplatesInputSchema } from './TagCreateNestedOneWithoutProjectTemplatesInputSchema';

export const ProjectTemplatesToTagsCreateWithoutTaggerInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsCreateWithoutTaggerInput> = z.object({
  project: z.lazy(() => ProjectTemplateCreateNestedOneWithoutTagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutProjectTemplatesInputSchema)
}).strict();

export default ProjectTemplatesToTagsCreateWithoutTaggerInputSchema;
