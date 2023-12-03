import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { TagUpdateWithoutProjectTemplatesInputSchema } from './TagUpdateWithoutProjectTemplatesInputSchema';
import { TagUncheckedUpdateWithoutProjectTemplatesInputSchema } from './TagUncheckedUpdateWithoutProjectTemplatesInputSchema';

export const TagUpdateToOneWithWhereWithoutProjectTemplatesInputSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutProjectTemplatesInput> = z.object({
  where: z.lazy(() => TagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TagUpdateWithoutProjectTemplatesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutProjectTemplatesInputSchema) ]),
}).strict();

export default TagUpdateToOneWithWhereWithoutProjectTemplatesInputSchema;
