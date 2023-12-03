import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateWithoutPrioritiesInputSchema } from './PersonUpdateWithoutPrioritiesInputSchema';
import { PersonUncheckedUpdateWithoutPrioritiesInputSchema } from './PersonUncheckedUpdateWithoutPrioritiesInputSchema';
import { PersonCreateWithoutPrioritiesInputSchema } from './PersonCreateWithoutPrioritiesInputSchema';
import { PersonUncheckedCreateWithoutPrioritiesInputSchema } from './PersonUncheckedCreateWithoutPrioritiesInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutPrioritiesInputSchema: z.ZodType<Prisma.PersonUpsertWithoutPrioritiesInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutPrioritiesInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutPrioritiesInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutPrioritiesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutPrioritiesInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutPrioritiesInputSchema;
