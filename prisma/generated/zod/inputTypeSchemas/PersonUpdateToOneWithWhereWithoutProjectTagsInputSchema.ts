import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutProjectTagsInputSchema } from './PersonUpdateWithoutProjectTagsInputSchema';
import { PersonUncheckedUpdateWithoutProjectTagsInputSchema } from './PersonUncheckedUpdateWithoutProjectTagsInputSchema';

export const PersonUpdateToOneWithWhereWithoutProjectTagsInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutProjectTagsInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutProjectTagsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutProjectTagsInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutProjectTagsInputSchema;
