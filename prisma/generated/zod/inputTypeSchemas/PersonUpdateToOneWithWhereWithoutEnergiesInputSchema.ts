import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutEnergiesInputSchema } from './PersonUpdateWithoutEnergiesInputSchema';
import { PersonUncheckedUpdateWithoutEnergiesInputSchema } from './PersonUncheckedUpdateWithoutEnergiesInputSchema';

export const PersonUpdateToOneWithWhereWithoutEnergiesInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutEnergiesInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutEnergiesInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutEnergiesInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutEnergiesInputSchema;
