import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutEnergiesInputSchema } from './PersonCreateWithoutEnergiesInputSchema';
import { PersonUncheckedCreateWithoutEnergiesInputSchema } from './PersonUncheckedCreateWithoutEnergiesInputSchema';

export const PersonCreateOrConnectWithoutEnergiesInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutEnergiesInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutEnergiesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutEnergiesInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutEnergiesInputSchema;
