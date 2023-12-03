import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateNestedOneWithoutProjectTemplatesInputSchema } from './TagCreateNestedOneWithoutProjectTemplatesInputSchema';
import { PersonCreateNestedOneWithoutProjectTagsInputSchema } from './PersonCreateNestedOneWithoutProjectTagsInputSchema';

export const ProjectTemplatesToTagsCreateWithoutProjectInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsCreateWithoutProjectInput> = z.object({
  tag: z.lazy(() => TagCreateNestedOneWithoutProjectTemplatesInputSchema),
  tagger: z.lazy(() => PersonCreateNestedOneWithoutProjectTagsInputSchema)
}).strict();

export default ProjectTemplatesToTagsCreateWithoutProjectInputSchema;
