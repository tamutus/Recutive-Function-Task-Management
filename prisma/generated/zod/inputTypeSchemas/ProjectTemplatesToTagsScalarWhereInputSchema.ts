import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const ProjectTemplatesToTagsScalarWhereInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectTemplatesToTagsScalarWhereInputSchema),z.lazy(() => ProjectTemplatesToTagsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectTemplatesToTagsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectTemplatesToTagsScalarWhereInputSchema),z.lazy(() => ProjectTemplatesToTagsScalarWhereInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taggerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default ProjectTemplatesToTagsScalarWhereInputSchema;
