import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutPrivateEnergiesInputSchema } from './PersonCreateWithoutPrivateEnergiesInputSchema';
import { PersonUncheckedCreateWithoutPrivateEnergiesInputSchema } from './PersonUncheckedCreateWithoutPrivateEnergiesInputSchema';

export const PersonCreateOrConnectWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutPrivateEnergiesInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutPrivateEnergiesInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutPrivateEnergiesInputSchema;
