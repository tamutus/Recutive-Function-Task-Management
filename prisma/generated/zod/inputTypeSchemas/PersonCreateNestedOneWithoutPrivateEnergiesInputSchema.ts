import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutPrivateEnergiesInputSchema } from './PersonCreateWithoutPrivateEnergiesInputSchema';
import { PersonUncheckedCreateWithoutPrivateEnergiesInputSchema } from './PersonUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { PersonCreateOrConnectWithoutPrivateEnergiesInputSchema } from './PersonCreateOrConnectWithoutPrivateEnergiesInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutPrivateEnergiesInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutPrivateEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutPrivateEnergiesInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutPrivateEnergiesInputSchema;
