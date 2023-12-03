import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { ProjectTemplateRelationFilterSchema } from './ProjectTemplateRelationFilterSchema';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';
import { TagRelationFilterSchema } from './TagRelationFilterSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const ProjectTemplatesToTagsWhereInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectTemplatesToTagsWhereInputSchema),z.lazy(() => ProjectTemplatesToTagsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectTemplatesToTagsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectTemplatesToTagsWhereInputSchema),z.lazy(() => ProjectTemplatesToTagsWhereInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taggerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  project: z.union([ z.lazy(() => ProjectTemplateRelationFilterSchema),z.lazy(() => ProjectTemplateWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => TagRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
  tagger: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
}).strict();

export default ProjectTemplatesToTagsWhereInputSchema;
