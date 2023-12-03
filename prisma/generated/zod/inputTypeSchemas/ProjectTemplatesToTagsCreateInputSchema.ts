import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateNestedOneWithoutTagsInputSchema } from './ProjectTemplateCreateNestedOneWithoutTagsInputSchema';
import { TagCreateNestedOneWithoutProjectTemplatesInputSchema } from './TagCreateNestedOneWithoutProjectTemplatesInputSchema';
import { PersonCreateNestedOneWithoutProjectTagsInputSchema } from './PersonCreateNestedOneWithoutProjectTagsInputSchema';

export const ProjectTemplatesToTagsCreateInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsCreateInput> = z.object({
  project: z.lazy(() => ProjectTemplateCreateNestedOneWithoutTagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutProjectTemplatesInputSchema),
  tagger: z.lazy(() => PersonCreateNestedOneWithoutProjectTagsInputSchema)
}).strict();

export default ProjectTemplatesToTagsCreateInputSchema;
