import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateWithoutPrivateEnergiesInputSchema } from './PersonUpdateWithoutPrivateEnergiesInputSchema';
import { PersonUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './PersonUncheckedUpdateWithoutPrivateEnergiesInputSchema';
import { PersonCreateWithoutPrivateEnergiesInputSchema } from './PersonCreateWithoutPrivateEnergiesInputSchema';
import { PersonUncheckedCreateWithoutPrivateEnergiesInputSchema } from './PersonUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.PersonUpsertWithoutPrivateEnergiesInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutPrivateEnergiesInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutPrivateEnergiesInputSchema;
