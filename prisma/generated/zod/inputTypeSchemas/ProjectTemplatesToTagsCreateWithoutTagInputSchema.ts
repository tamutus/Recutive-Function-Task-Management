import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateNestedOneWithoutTagsInputSchema } from './ProjectTemplateCreateNestedOneWithoutTagsInputSchema';
import { PersonCreateNestedOneWithoutProjectTagsInputSchema } from './PersonCreateNestedOneWithoutProjectTagsInputSchema';

export const ProjectTemplatesToTagsCreateWithoutTagInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsCreateWithoutTagInput> = z.object({
  project: z.lazy(() => ProjectTemplateCreateNestedOneWithoutTagsInputSchema),
  tagger: z.lazy(() => PersonCreateNestedOneWithoutProjectTagsInputSchema)
}).strict();

export default ProjectTemplatesToTagsCreateWithoutTagInputSchema;
