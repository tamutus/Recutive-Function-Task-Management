import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutPrioritiesInputSchema } from './PersonUpdateWithoutPrioritiesInputSchema';
import { PersonUncheckedUpdateWithoutPrioritiesInputSchema } from './PersonUncheckedUpdateWithoutPrioritiesInputSchema';

export const PersonUpdateToOneWithWhereWithoutPrioritiesInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutPrioritiesInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutPrioritiesInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutPrioritiesInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutPrioritiesInputSchema;
