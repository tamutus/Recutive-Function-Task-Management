import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutPrivateEnergiesInputSchema } from './PersonUpdateWithoutPrivateEnergiesInputSchema';
import { PersonUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './PersonUncheckedUpdateWithoutPrivateEnergiesInputSchema';

export const PersonUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutPrivateEnergiesInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema;
