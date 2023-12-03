import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateWithoutEnergiesInputSchema } from './PersonUpdateWithoutEnergiesInputSchema';
import { PersonUncheckedUpdateWithoutEnergiesInputSchema } from './PersonUncheckedUpdateWithoutEnergiesInputSchema';
import { PersonCreateWithoutEnergiesInputSchema } from './PersonCreateWithoutEnergiesInputSchema';
import { PersonUncheckedCreateWithoutEnergiesInputSchema } from './PersonUncheckedCreateWithoutEnergiesInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutEnergiesInputSchema: z.ZodType<Prisma.PersonUpsertWithoutEnergiesInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutEnergiesInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutEnergiesInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutEnergiesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutEnergiesInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutEnergiesInputSchema;
