import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutEnergyTagsInputSchema } from './PersonCreateWithoutEnergyTagsInputSchema';
import { PersonUncheckedCreateWithoutEnergyTagsInputSchema } from './PersonUncheckedCreateWithoutEnergyTagsInputSchema';
import { PersonCreateOrConnectWithoutEnergyTagsInputSchema } from './PersonCreateOrConnectWithoutEnergyTagsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutEnergyTagsInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutEnergyTagsInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutEnergyTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutEnergyTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutEnergyTagsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutEnergyTagsInputSchema;
