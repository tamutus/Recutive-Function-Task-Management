import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { TagUpdateWithoutTaskTemplatesInputSchema } from './TagUpdateWithoutTaskTemplatesInputSchema';
import { TagUncheckedUpdateWithoutTaskTemplatesInputSchema } from './TagUncheckedUpdateWithoutTaskTemplatesInputSchema';

export const TagUpdateToOneWithWhereWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutTaskTemplatesInput> = z.object({
  where: z.lazy(() => TagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TagUpdateWithoutTaskTemplatesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutTaskTemplatesInputSchema) ]),
}).strict();

export default TagUpdateToOneWithWhereWithoutTaskTemplatesInputSchema;
